# 🛡️ RazorGuard AI — Autonomous Payment Risk Manager

> **AI-Powered Risk Intelligence Platform for Digital Merchants**  
> *Detect risk. Understand why. Act before money is lost.*

[![Vercel Deploy](https://therealsujitk-vercel-badge.vercel.app/?app=razorguard-ai)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)]()
[![React](https://img.shields.io/badge/React-18-cyan.svg)]()

---

## 📌 Overview

**RazorGuard AI** is a real-time payment risk intelligence and autonomous fraud prevention platform engineered for high-velocity digital checkouts. Built with a dual-plane architecture, it separates sub-15ms synchronous payment classification from deep asynchronous forensic graph synthesis.

---

## ⚡ Key Features

- **Sub-15ms In-Flight Decision Engine**: Multi-stage evaluation pipeline combining deterministic rules, ML gradient boosted trees, and behavioral profiling.
- **Explainable AI (XAI)**: SHAP-based feature attribution for every decision (e.g., amount anomaly z-score, velocity burst, proxy risk, location shift).
- **Interactive Developer Sandbox**: Live transaction payload analyzer with customizable parameters and real-time inference simulations.
- **AI Forensic Investigator Studio**: Autonomous agentic evidence synthesizer with tool-call traces (`get_customer_history`, `inspect_network_telemetry`, `query_consortium_graph`).
- **Merchant Operations Dashboard**: Real-time observability console tracking processed volume, intercepted loss, risk distribution, and 1-click triage drawer actions (*Approve*, *Hold*, *Block*).
- **Zero-Friction Clean Light UI**: Modern, accessible fintech design system inspired by Stripe, Linear, and Razorpay.

---

## 🏗️ Architecture & Pipeline

```
TRANSACTION INGESTION
        ↓
SIGNAL EXTRACTION (42 Features)
        ↓
BEHAVIOURAL PROFILING (Z-Score Deviation)
        ↓
DETERMINISTIC RULE ENGINE
        ↓
ML ENSEMBLE (XGBoost + LightGBM)
        ↓
COMPOSITE RISK SCORE (0–100)
        ↓
AGENTIC AI INVESTIGATION & EXPLAINABILITY
        ↓
AUTONOMOUS GATEWAY DIRECTIVES (Approve / Step-Up OTP / Block)
```

---

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons
- **ML & Inference**: Python 3.12, XGBoost, Isolation Forest, Scikit-Learn, SHAP
- **Backend / Gateway**: FastAPI, Asynchronous REST & WebSocket Webhooks
- **Data & Ledger**: PostgreSQL, PgVector, Docker Compose

---

## 🛠️ Local Setup & Development

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/razorguard-ai.git
cd razorguard-ai
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## ☁️ Deployment on Vercel

### Deploy with Vercel CLI:
```bash
npx vercel
```

### Or Deploy via GitHub:
1. Push this repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Set Framework Preset to **Vite**.
4. Click **Deploy**.

---

## 📄 License & Attribution

This project is licensed under the MIT License.  
*Disclaimer: Built as an original student/buildathon fintech project. Not affiliated with or an official product of Razorpay Software Pvt. Ltd.*
