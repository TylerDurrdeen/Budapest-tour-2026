<p align="center">
  <img src="public/github/Slide%2016_9%20-%206.png" alt="Budapest túra" width="100%" />
</p>

<h1 align="center">Budapest Túra 2026</h1>

<p align="center">
  Egy hétvégi, vezetett városnéző túra Budapesten — interaktív útiterv térképpel, megállókkal és gyakorlati tippekkel.
  <br />
  <em>A weekend guided city tour of Budapest — an interactive itinerary with map, stops and practical tips.</em>
</p>

<p align="center">
  <strong>📅 2026. június 26–28. (Péntek–Vasárnap)</strong>
</p>

---

## 🗺️ Az útiterv (Trip Guideline)

A túra három napra van osztva. Minden megálló a Deák Ferenc tér környéki szállástól **5–15 perc gyalog**.

### 🔴 Péntek — jún. 26. · *Érkezés, lazítós este*

| Idő | Megálló | Mit csinálunk |
| --- | --- | --- |
| 18:00 | **Déli pályaudvar** | Indulás Balatonalmádiból — vonat vagy autó. |
| 20:15 | **Deák Ferenc tér — szállás** | Check-in a Király utca / Deák tér környékén. |
| 21:00 | **Gozsdu udvar — vacsora** | Spíler Bistro, Mazel Tov vagy Sushi Sei. |
| 22:30 | **Romkocsma kör — Kazinczy u.** | Szimpla Kert, Mazel Tov, Kőleves Kert. |

> 💡 Minden innen 5–15 perc gyalog.

### 🔵 Szombat — jún. 27. · *A nagy nap + hajó*

| Idő | Megálló | Mit csinálunk |
| --- | --- | --- |
| 09:00 | **Espresso Embassy — reggeli** | Arany János u., 5 perc séta a szállástól. |
| 10:00 | **Szent István Bazilika** | Kupola panoráma — 360° kilátás (~1500 Ft). |
| 11:30 | **Széchenyi Lánchíd** | Gyalogos átkelés a Dunán — Insta-aranybánya! |
| 12:00 | **Budavári Sikló** | Fel a Várhegyre — rövid, hangulatos út. |
| 12:30 | **Halászbástya + Mátyás-templom** | Fotózás, kávé a Ruszwurmban. |
| 15:30 | **Várkert Bazár** | Lefelé a Várból — gyalog, lefelé könnyű. |
| 16:30 | **Nagyvásárcsarnok** | 2-es villamos után — lángos, ajándék-shopping. |
| 17:30 | **Vörösmarty tér** | Séta a Váci utcán vissza Deák tér felé. |
| 20:30 | **Hajókirándulás** | Naplemente + kivilágított Parlament + Lánchíd. |

> 💡 A 2-es villamos a világ egyik legszebb vonala a Duna mentén. Júniusban a nap ~20:50-kor nyugszik — pont a kék órára esik a hajózás.

### 🟠 Vasárnap — jún. 28. · *Indulás haza — szoros időzítés!*

| Idő | Megálló | Mit csinálunk |
| --- | --- | --- |
| 07:30 | **Madal Café — reggeli** | Hold u., nyit 7:30-kor. |
| 08:30 | **100E reptéri busz — Deák tér** | Kálvin/Erzsébet tér felőli megálló, ~35–45 perc. |
| 09:30 | **Liszt Ferenc reptér T2** | Check-in, poggyászfeladás — gép 11:35-kor. |

> ⚠️ A 100E NEM része a BKK bérletnek — külön jegy kell! Backup: taxi ~7000–9000 Ft, ~30 perc reggel.

---

## ✅ Gyakorlati tippek (Practical tips)

- 🎫 **BKK 72 órás bérlet** mindenkinek — metró, villamos, busz, HÉV.
- 🚌 **100E reptéri busz** külön jegy — nem része a bérletnek.
- 🚢 **Hajóra online** érdemes foglalni előre — naplemente járatok hamar telnek.
- 👟 **Kényelmes cipő + powerbank** — rengeteg gyaloglás és fotó lesz!

---

## 💻 Az alkalmazásról (About the app)

Ez egy interaktív webalkalmazás, amely a fenti útitervet jeleníti meg napokra bontva, kattintható megállókkal és térképes útvonallal.

**Tech stack:**

- [Next.js 16](https://nextjs.org/) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [MapLibre GL](https://maplibre.org/) — interaktív térkép és útvonalrajzolás
- [next-themes](https://github.com/pacocoursey/next-themes) — világos/sötét mód

## 🚀 Indítás (Getting started)

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver
npm run dev
```

Ezután nyisd meg a [http://localhost:3000](http://localhost:3000) címet a böngészőben.

```bash
# Production build
npm run build
npm run start
```

## 📁 Projekt struktúra

```
src/
├── app/                  # Next.js app router (layout, page, globals)
├── components/
│   ├── guide/            # Túra-specifikus komponensek (city-guide, stop-card, route-map-drawer)
│   └── ui/               # shadcn/ui komponensek
└── lib/
    └── tour-data.ts      # Az útiterv adatai (napok, megállók, tippek)
```

---

## 📄 Licenc

[MIT](LICENSE) © 2026 TylerDurrdeen
