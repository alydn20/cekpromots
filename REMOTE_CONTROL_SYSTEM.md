# 🎮 Shield Rules - Remote Control System

## 🎯 KONSEP

Website Anda jadi **remote control** untuk semua user!

```
Anda (Admin)                    User (Client)
     │                               │
     │ 1. Upload rules.txt           │
     │    ke GitHub Pages            │
     │                               │
     ├──────────────────────────────→│
     │ alydn20.github.io/rules.txt   │
     │                               │
     │                               │ 2. User add URL ke AdGuard
     │                               │
     │                               │ 3. AdGuard fetch rules
     │                               │    dari website Anda
     │                               │
     │ 4. Anda edit/delete rules.txt │
     │    di GitHub                  │
     │                               │
     ├──────────────────────────────→│
     │ Updated rules / 404 Error     │ 5. AdGuard auto-update
     │                               │    atau error = no blocking
     │                               │
```

**Kelebihan:**
- ✅ Anda control di 1 tempat (GitHub)
- ✅ Matikan website = semua user stop blocking
- ✅ Update rules = semua user auto-update
- ✅ User tidak tahu isi rules (hanya URL)
- ✅ Bisa ganti rules kapan saja

---

## 📁 FILE STRUCTURE

Upload ke GitHub repo `cekpromots`:

```
cekpromots/
├── index.html          ← Landing page (optional)
├── rules.txt           ← Main rules (plain text)
└── README.md           ← Instructions (optional)
```

---

## 📝 FILE 1: rules.txt

**INI FILE UTAMA - USER PAKAI INI!**

```
||csftr.com^
||ap-device-pro.csftr.com^
||api.csftr.com^
```

**URL:** `https://alydn20.github.io/cekpromots/rules.txt`

---

## 📝 FILE 2: index.html (Optional Landing Page)

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Network Protection Rules</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 16px;
            padding: 40px;
            max-width: 600px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
        }
        h1 {
            color: #2c3e50;
            margin-bottom: 20px;
        }
        .url-box {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            font-family: monospace;
            word-break: break-all;
        }
        .btn {
            background: #2c3e50;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1em;
            margin: 10px;
        }
        .btn:hover {
            background: #34495e;
        }
        .instructions {
            text-align: left;
            margin-top: 30px;
            padding: 20px;
            background: #e8f5e9;
            border-radius: 8px;
        }
        .instructions ol {
            margin-left: 20px;
            line-height: 1.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🛡️ Network Protection</h1>
        <p>Filter rules untuk DNS blocking</p>
        
        <div class="url-box" id="rulesUrl">
            https://alydn20.github.io/cekpromots/rules.txt
        </div>
        
        <button class="btn" onclick="copyUrl()">📋 Copy URL</button>
        <button class="btn" onclick="viewRules()">👁️ View Rules</button>
        
        <div class="instructions">
            <h3>📱 Cara Pakai:</h3>
            <ol>
                <li>Install AdGuard dari <a href="https://adguard.com/android/overview.html" target="_blank">sini</a></li>
                <li>Buka AdGuard → Settings</li>
                <li>DNS filtering → DNS filters</li>
                <li>Tap "Add DNS filter"</li>
                <li>Paste URL di atas</li>
                <li>Enable filter</li>
                <li>Done! ✅</li>
            </ol>
        </div>
    </div>

    <script>
        function copyUrl() {
            const url = document.getElementById('rulesUrl').textContent;
            navigator.clipboard.writeText(url).then(() => {
                alert('✅ URL copied!');
            });
        }

        function viewRules() {
            window.open('rules.txt', '_blank');
        }
    </script>
</body>
</html>
```

---

## 🎮 CARA KONTROL

### **Aktifkan Blocking:**

1. Upload `rules.txt` ke GitHub repo
2. File accessible: `https://alydn20.github.io/cekpromots/rules.txt`
3. User yang sudah add URL akan auto-update
4. ✅ Blocking AKTIF

### **Matikan Blocking:**

**Option 1: Delete File**
```bash
# Di GitHub repo, delete rules.txt
# User akan dapat 404 error
# AdGuard tidak bisa load rules
# ❌ Blocking MATI
```

**Option 2: Empty File**
```bash
# Edit rules.txt jadi kosong
# AdGuard load empty rules
# ❌ Blocking MATI
```

**Option 3: Invalid Rules**
```bash
# Edit rules.txt jadi:
# DISABLED
# 
# AdGuard akan skip invalid rules
# ❌ Blocking MATI
```

### **Update Rules:**

```bash
# Edit rules.txt di GitHub
# Add atau remove domains
# Commit changes
# User akan auto-update dalam 1-24 jam
# ✅ Rules UPDATED
```

---

## 📋 USER INSTRUCTIONS

Berikan ini ke user:

```
📱 SETUP INSTRUCTIONS:

1. Install AdGuard:
   https://adguard.com/android/overview.html

2. Open AdGuard → Settings

3. DNS filtering → DNS filters

4. Tap "Add DNS filter"

5. Name: Shield Protection

6. URL: https://alydn20.github.io/cekpromots/rules.txt

7. Tap "Add"

8. Enable the filter

9. Done! Protection active ✅

---

NOTES:
- Rules auto-update dari server
- Jangan edit manual
- Jika tidak bekerja, check URL masih aktif
```

---

## 🎯 WORKFLOW

### **Setup (Sekali saja):**

1. **Upload files ke GitHub:**
   - `rules.txt` (main file)
   - `index.html` (landing page)

2. **Enable GitHub Pages:**
   - Settings → Pages → Enable

3. **Share URL ke user:**
   - `https://alydn20.github.io/cekpromots/rules.txt`

### **Daily Operation:**

**Untuk Aktifkan:**
- ✅ File `rules.txt` exists di repo
- User auto-update

**Untuk Matikan:**
- ❌ Delete atau rename `rules.txt`
- User dapat error = no blocking

**Untuk Update:**
- ✏️ Edit `rules.txt`
- Add/remove domains
- User auto-sync

---

## 💡 ADVANCED FEATURES

### **Feature 1: Multiple Rule Files**

Buat beberapa file untuk different users:

```
rules.txt           → Free users (basic blocking)
rules-premium.txt   → Premium users (extensive blocking)
rules-trial.txt     → Trial users (limited time)
```

**URL berbeda untuk tiap tier:**
```
Free:    https://alydn20.github.io/cekpromots/rules.txt
Premium: https://alydn20.github.io/cekpromots/rules-premium.txt
Trial:   https://alydn20.github.io/cekpromots/rules-trial.txt
```

### **Feature 2: Expiry System**

Dalam `rules.txt`, tambahkan comment dengan expire date:

```
! Expire: 2025-01-31
! User: john@example.com
||csftr.com^
||ap-device-pro.csftr.com^
||api.csftr.com^
```

### **Feature 3: A/B Testing**

Buat 2 versions:

```
rules-v1.txt   → Version 1
rules-v2.txt   → Version 2
```

Test mana yang lebih efektif.

---

## 📊 MONITORING

### **Check Usage:**

GitHub provides analytics:
- Settings → Insights → Traffic
- Lihat berapa orang access `rules.txt`
- Lihat unique visitors

### **Track Changes:**

- Commits = history of changes
- Lihat kapan rules di-update
- Rollback jika perlu

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] Create `rules.txt` with domains
- [ ] Create `index.html` (optional)
- [ ] Upload to GitHub repo
- [ ] Enable GitHub Pages
- [ ] Test URL accessible
- [ ] Share URL to users
- [ ] Verify blocking works
- [ ] Test update mechanism
- [ ] Test disable mechanism

---

## 🎯 CONTROL COMMANDS

### **Enable All Users:**
```bash
# Make sure rules.txt exists and has content
git add rules.txt
git commit -m "Enable blocking"
git push
```

### **Disable All Users:**
```bash
# Delete rules.txt
git rm rules.txt
git commit -m "Disable blocking"
git push
```

### **Update Rules:**
```bash
# Edit rules.txt
git add rules.txt
git commit -m "Update blocking rules"
git push
```

---

## ⚡ QUICK START

**Right now:**

1. **Create `rules.txt` di GitHub repo:**
```
||csftr.com^
||ap-device-pro.csftr.com^
||api.csftr.com^
```

2. **Commit & push**

3. **Share URL:**
```
https://alydn20.github.io/cekpromots/rules.txt
```

4. **Users add to AdGuard:**
```
DNS filters → Add DNS filter → Paste URL
```

5. **Done!** ✅

**To disable:**
- Delete or rename `rules.txt`
- All users stop blocking instantly!

---

## 🎮 ADMIN POWER

**Anda punya full control:**

✅ **Enable/Disable:** Delete file
✅ **Update Rules:** Edit file
✅ **Different Tiers:** Multiple files
✅ **Instant Effect:** GitHub Pages fast update
✅ **No App Needed:** Pure web-based
✅ **Scalable:** Works for 1 or 1000 users

---

**SUMMARY: 1 file di GitHub = Control semua user! Delete file = Block OFF! 🎯**
