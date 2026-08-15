# Fragments — by Reda Arif

*Places, stories, and ideas worth keeping.*

Squelette du blog personnel construit avec **Astro**. Le design éditorial est déjà migré depuis la version HTML statique. Prochaines étapes: déploiement sur Netlify + Decap CMS pour l'interface d'admin.

---

## Pour lancer le projet localement

Ouvre le **Terminal** (Cmd + Espace → tape "Terminal").

**1. Va dans le dossier du projet**

Si tu as extrait le zip dans ton dossier `Downloads`:

```bash
cd ~/Downloads/fragments
```

Si tu l'as mis ailleurs, remplace le chemin.

**2. Installe les dépendances** (fais ça UNE seule fois, au premier lancement)

```bash
npm install
```

Ça prend 30-60 secondes. Ça télécharge Astro et tout ce dont il a besoin. Tu vas voir apparaître un dossier `node_modules/` — c'est normal, tu ne le touches jamais.

**3. Lance le serveur de développement**

```bash
npm run dev
```

Tu vas voir quelque chose comme:

```
astro  v7.2.2 ready in XXX ms
┃ Local    http://localhost:4321/
```

**4. Ouvre le site**

Ouvre ton navigateur et va sur `http://localhost:4321/`

Tu devrais voir ton blog exactement comme avant, mais maintenant propulsé par Astro.

**5. Pour arrêter le serveur**

Dans le Terminal, appuie sur `Ctrl + C`.

---

## Comment ça marche

Trois choses à comprendre:

**Le hot-reload.** Quand le serveur `npm run dev` tourne, chaque fois que tu sauvegardes un fichier dans VS Code, ton navigateur se rafraîchit tout seul. Tu vois tes changements en temps réel.

**Les pages sont dans `src/pages/`.** Un fichier `.astro` = une page du site.
- `src/pages/index.astro` → page d'accueil (URL: `/`)
- `src/pages/essai.astro` → page de l'article (URL: `/essai`)

**Le layout partagé.** `src/layouts/BaseLayout.astro` contient tout ce qui est commun (en-tête HTML, polices, script de bascule de langue). Chaque page l'utilise via `<BaseLayout>`.

---

## Structure du projet

```
fragments/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    ← structure HTML partagée
│   ├── pages/
│   │   ├── index.astro          ← page d'accueil
│   │   └── essai.astro          ← article
│   └── styles/
│       └── global.css           ← tout le design system
├── public/                       ← fichiers statiques (favicon, images plus tard)
├── astro.config.mjs             ← config Astro
├── package.json                  ← dépendances
└── README.md                     ← ce fichier
```

---

## Prochaines étapes

- **Session 2**: mettre ce projet sur GitHub, déployer sur Netlify (URL publique), connecter Decap CMS (interface admin)
- **Session 3**: construire les 7 sections complètes du brief éditorial (Voyages, Pensées, Art & Curiosités, Passions, Histoires, À propos + carte interactive)

---

## Commandes utiles

| Commande | Ce que ça fait |
|---|---|
| `npm install` | Installe les dépendances (à faire une fois) |
| `npm run dev` | Lance le serveur local pour développer |
| `npm run build` | Génère le site final dans `dist/` (pour déploiement) |
| `npm run preview` | Prévisualise le site final construit |
