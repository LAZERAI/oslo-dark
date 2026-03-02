import { readFile } from "fs/promises";

const CONFIG_PATH = "./config.json";
const MAX_RETRIES = 3;

// loads config from disk, falls back to defaults if missing
async function loadConfig(path = CONFIG_PATH) {
  try {
    const raw = await readFile(path, "utf-8");
    const config = JSON.parse(raw);

    return {
      port: config.port || 3000,
      host: config.host ?? "localhost",
      debug: config.debug === true,
      retries: Math.min(config.retries || 1, MAX_RETRIES),
    };
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`config not found at ${path}, using defaults`);
      return { port: 3000, host: "localhost", debug: false, retries: 1 };
    }
    throw err;
  }
}

// quick filter for active users, nothing fancy
function getActiveUsers(users) {
  const now = Date.now();
  const cutoff = 1000 * 60 * 60 * 24 * 30; // 30 days

  return users.filter((u) => {
    if (!u.lastSeen) return false;
    return now - u.lastSeen < cutoff && u.status !== "banned";
  });
}

class Server {
  #config;
  #connections = new Map();

  constructor(config) {
    this.#config = config;
  }

  async start() {
    const { port, host } = this.#config;
    console.log(`listening on ${host}:${port}`);

    // TODO: actual server setup, this is just the skeleton
    return { port, host, started: true };
  }

  addConnection(id, socket) {
    if (this.#connections.has(id)) {
      socket.close();
      return null;
    }
    this.#connections.set(id, { socket, connectedAt: Date.now() });
    return id;
  }

  get connectionCount() {
    return this.#connections.size;
  }
}

// --

const config = await loadConfig();
const server = new Server(config);

if (config.debug) {
  console.log("config:", JSON.stringify(config, null, 2));
}

await server.start();
