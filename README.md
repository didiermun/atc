# Censoring with Node.js

## Setup

```
git clone https://github.com/didiermun/censoring.git
cd censoring
```

### Audio Censoring
```
cd ac
npm install
```
Set your `DG_KEY` environment variable or replace `process.env.DG_KEY` with your key.
You can also create `.env` file in root folder. Then add `DG_KEY=<YOUR_API_KEY>`.

```
node index.js
```

### Text Censoring

```
cd tc
npm install
node index.js
```

That is a censor!