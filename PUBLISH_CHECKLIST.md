# 🚀 OSLO DARK - PUBLISHING CHECKLIST

## Quick Reference for Publishing to VS Code Marketplace

---

## ✅ PRE-PUBLISHING CHECKLIST

- [ ] Icon created (128x128 PNG, transparent background)
- [ ] Icon saved as `icon.png` in repo root
- [ ] All files pushed to GitHub
- [ ] VSCE installed (`vsce --version`)
- [ ] Publisher account verified (lazerai)
- [ ] PAT (Personal Access Token) available

---

## 🎬 QUICK COMMANDS

```powershell
# Navigate to repo
cd "c:\Users\Lazerai\Downloads\Oslo-dark"

# Add icon
git add icon.png
git commit -m "feat: add professional theme icon"
git push

# Package extension
vsce package

# Publish to marketplace
vsce publish
```

---

## 📋 DETAILED STEPS

### Step 1: Create Icon
- Design 128x128 PNG with transparent background
- Use Oslo Dark colors (#1e3a5f to #82a5b9 gradient)
- Save as `icon.png` in repo root
- Reference: `docs/ICON_DESIGN_GUIDE.md`

### Step 2: Push Icon to GitHub
```powershell
cd "c:\Users\Lazerai\Downloads\Oslo-dark"
git add icon.png
git commit -m "feat: add professional theme icon"
git push origin main
```

### Step 3: Verify Files
```powershell
cd "c:\Users\Lazerai\Downloads\Oslo-dark"
ls -la  # Should show icon.png
cat package.json  # Verify version and metadata
```

### Step 4: Package Extension
```powershell
cd "c:\Users\Lazerai\Downloads\Oslo-dark"
vsce package
# Creates: oslo-dark-1.1.0.vsix
```

### Step 5: Publish to Marketplace
```powershell
vsce publish
```

If prompted for PAT (Personal Access Token), paste your Azure token.

---

## 📊 VERSION UPDATE

**Current Version**: 1.0.0  
**New Version**: 1.1.0 (auto)  
**Update Description**:
- Professional README and documentation
- 14 keywords (vs 6)
- Contributing guidelines
- Professional icon
- Icon & publishing guides

---

## ⏱️ WHAT TO EXPECT

| Step | Time | Notes |
|------|------|-------|
| Create Icon | 30-60 min | One-time effort |
| Push to GitHub | 1 min | Quick |
| Package | 1 min | Creates .vsix file |
| Publish | 1-2 min | Marketplace updates in 30 min |
| **Total** | ~60 min | Mostly icon creation |

---

## 🔗 IMPORTANT LINKS

- **Your Repo**: https://github.com/LAZERAI/oslo-dark
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=lazerai.oslo-dark
- **Publisher Dashboard**: https://marketplace.visualstudio.com/manage
- **VSCE Docs**: https://code.visualstudio.com/api/working-with-extensions/publishing-extension

---

## 📝 IF YOU GET STUCK

### "vsce: command not found"
```powershell
npm install -g @vscode/vsce
```

### "No publisher account"
```powershell
vsce create-publisher lazerai
```

### "Cannot find icon.png"
- Ensure icon.png is in repo root
- Check filename (must be exactly `icon.png`)
- Run: `ls icon.png` to verify

### "PAT required"
- Get token from: https://dev.azure.com/_usersettings/tokens
- Scopes: Marketplace (manage)
- Paste when prompted: `vsce publish`

---

## 🎯 AFTER PUBLISHING

1. Wait 30 minutes for marketplace to update
2. Check: https://marketplace.visualstudio.com/items?itemName=lazerai.oslo-dark
3. Verify:
   - ✅ New description shows
   - ✅ New icon displays
   - ✅ Keywords updated
   - ✅ Version is 1.1.0
   - ✅ README renders correctly

4. Share your theme! 🎉

---

## 🎨 ICON DESIGN QUICK START

**Best Free Tools**:
1. **Figma** (figma.com) - Most flexible
2. **Canva** (canva.com) - User-friendly
3. **Pixlr** (pixlr.com) - Quick & easy

**Design Ideas**:
- Simple circle with gradient
- Geometric shapes (hexagon, triangle)
- Abstract Oslo-inspired design
- Minimalist code brackets

**Color Palette**:
```css
Primary: #1e3a5f (Oslo Blue)
Accent: #82a5b9 (Light Cyan)
Highlight: #c8f0fa (Soft White-Blue)
```

**Size Specifications**:
- Design size: 256x256 or 512x512
- Export size: 128x128
- Format: PNG with transparency
- File size: < 50KB recommended

---

## ✨ YOU'RE READY!

Everything is set up. Just create the icon and publish! 🚀

Questions? See:
- `docs/ICON_DESIGN_GUIDE.md` for icon help
- `docs/PUBLISHING_GUIDE.md` for detailed guide
- `README.md` for general info
- `CONTRIBUTING.md` for technical details
