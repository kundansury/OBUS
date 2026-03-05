# OBUS - Optimized Bus Utilization System

> A Smart Transit Platform for Data-Driven Urban Bus Management

OBUS is an intelligent public transportation system designed to optimize bus utilization using machine learning, RFID-based ticketing, computer vision, and real-time passenger monitoring. The system enables adaptive route management, reduces overcrowding, and improves operational efficiency across urban bus networks.

---

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Proposed Solution](#proposed-solution)
- [System Architecture](#system-architecture)
- [Technology Stack](#technology-stack)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [How The System Works](#how-the-system-works)
- [Implementation Details](#implementation-details)
- [Results and Performance](#results-and-performance)
- [Future Scope](#future-scope)
- [Team](#team)
- [License](#license)

---

## Overview

| Detail | Description |
|---|---|
| **Project Type** | IoT-Based Smart Transportation System |
| **Domain** | Intelligent Transportation Systems (ITS) |
| **Institution** | K. K. Wagh Institute of Engineering Education and Research, Nashik |
| **Department** | Artificial Intelligence and Data Science |
| **Academic Year** | 2024 - 2025 |
| **Project Instructor** | Prof. Pranali K. Shinde |

OBUS addresses critical inefficiencies in urban public bus transport by combining hardware sensors (RFID modules, cameras) with cloud-based machine learning pipelines. The platform collects real-time passenger data, analyzes demand patterns, and dynamically adjusts routes and schedules to reduce overcrowding, minimize wait times, and maximize fleet utilization.

---

## Problem Statement

Urban bus systems across India face several critical operational challenges:

1. **Overcrowding** - Excessive passenger loads during peak hours create unsafe and uncomfortable travel conditions, discouraging public transport adoption.
2. **Inefficient Routes** - Static bus schedules that do not adapt to real-time demand cause delays, wasted fuel, and underutilized bus capacity on off-peak routes.
3. **Fare Evasion** - Traditional paper-based ticketing systems are prone to revenue loss through unmonitored boarding and counterfeit tickets.
4. **No Real-Time Monitoring** - Lack of live passenger data prevents transit authorities from making responsive management decisions about fleet allocation.
5. **Static Scheduling** - Fixed timetables ignore fluctuating passenger demand patterns (events, weather, holidays), leading to chronic service inefficiency.

These issues collectively lead to passenger discomfort, increased commute times, revenue leakage, and poor utilization of transportation resources across urban bus networks.

---

## Proposed Solution

OBUS solves these problems through a multi-layered, data-driven approach:

### 1. Tapless RFID Ticketing
Passengers carry RFID-enabled transit cards that are **automatically detected** when boarding the bus. Unlike tap-based systems, OBUS uses long-range RFID readers that detect cards even when inside bags or wallets. This eliminates queuing at card readers and enables seamless boarding.

### 2. Computer Vision Passenger Counting
A camera module at the bus entrance uses **YOLO (You Only Look Once)** object detection to count passengers entering and exiting in real time. This provides an independent verification of occupancy data and detects passengers without valid RFID cards.

### 3. ML-Based Demand Prediction
Machine learning models trained on historical ridership data, time-of-day patterns, weather data, and event calendars **forecast passenger demand** for each route and time slot. This enables proactive resource allocation rather than reactive management.

### 4. Dynamic Route Optimization
Based on real-time occupancy data and demand predictions, the system **dynamically adjusts bus routes, frequencies, and schedules**. High-demand routes receive additional buses while low-demand routes are consolidated to save resources.

### 5. Real-Time Occupancy Monitoring
Continuous passenger count data is transmitted to a central dashboard, giving transit authorities **live visibility** into the occupancy status of every bus in the fleet.

---

## System Architecture

The OBUS platform follows a three-layer architecture:

```
┌─────────────────────────────────────────────────────┐
│                    INPUT LAYER                       │
│  ┌──────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  RFID    │  │   Camera     │  │  Bus GPS     │  │
│  │  Module  │  │   Module     │  │  Device      │  │
│  └─────┬────┘  └──────┬───────┘  └──────┬───────┘  │
└────────┼───────────────┼────────────────┼───────────┘
         │               │                │
         ▼               ▼                ▼
┌─────────────────────────────────────────────────────┐
│                 PROCESSING LAYER                     │
│  ┌──────────────┐  ┌──────────┐  ┌──────────────┐  │
│  │   Backend    │  │ Database │  │  ML Engine   │  │
│  │   Server     │  │(Postgres)│  │ (Prediction) │  │
│  │  (Django)    │  │          │  │              │  │
│  └──────────────┘  └──────────┘  └──────────────┘  │
└─────────────────────────┬───────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│                   OUTPUT LAYER                       │
│  ┌──────────────┐  ┌──────────┐  ┌──────────────┐  │
│  │   Transit    │  │Analytics │  │    Route     │  │
│  │  Dashboard   │  │ Reports  │  │  Optimizer   │  │
│  └──────────────┘  └──────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Data Flow

1. **Input Layer** - RFID readers detect passenger boarding/alighting events. Cameras capture video feeds for computer vision processing. GPS modules track bus location.
2. **Processing Layer** - The Django backend receives sensor data via REST APIs, stores it in PostgreSQL, and triggers ML model inference for demand prediction and route optimization.
3. **Output Layer** - Transit authorities access real-time dashboards, analytics reports, and route optimization recommendations through a React-based web interface.

---

## Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React.js, HTML5, CSS3, JavaScript | Dashboard UI, real-time data visualization |
| **Backend** | Python, Django, REST APIs | Business logic, data processing, API layer |
| **Database** | PostgreSQL | Passenger data storage, route data, analytics |
| **Machine Learning** | Python, Scikit-Learn, TensorFlow | Demand prediction, pattern analysis |
| **Computer Vision** | YOLO, OpenCV | Passenger detection and counting |
| **Hardware** | RFID Reader Modules, RFID Cards | Contactless passenger identification |
| **Deployment** | Docker, AWS, Heroku | Containerized cloud deployment |
| **Version Control** | Git, GitHub | Source code management |

### Website Technology

This project showcase website is built separately using:

- **React 19** with Vite 7 for fast development
- **Vanilla CSS** with a custom design system (CSS custom properties)
- **Canvas API** for animated hero background
- **Intersection Observer API** for scroll-triggered animations
- Custom `useReveal` React hook for section reveal animations

---

## Key Features

### Tapless RFID Ticketing
- Long-range RFID detection (no tap required)
- Works with cards inside bags, wallets, or pockets
- Automatic boarding event logging with timestamps
- Fare calculation based on entry/exit stops

### Real-Time Passenger Counting
- YOLO-based object detection at bus entry/exit points
- Bidirectional counting (boarding vs. alighting)
- High accuracy even in crowded conditions
- Independent verification against RFID data

### Dynamic Route Optimization
- ML models analyze historical and real-time demand data
- Routes and schedules adjusted dynamically
- Peak hour frequency increases automated
- Off-peak route consolidation for fuel savings

### Transit Data Analytics
- Real-time occupancy monitoring across entire fleet
- Route-wise ridership trends and heatmaps
- Revenue tracking and fare evasion detection
- Operational efficiency metrics and KPIs

### Security and Fare Protection
- Cross-validation between RFID and camera counts
- Automatic detection of passengers without valid cards
- Transparent audit trail for all boarding events
- Encrypted data transmission

---

## Project Structure

```
OBUS/
├── public/
│   ├── images/
│   │   ├── hero-bus.png          # Hero section city bus image
│   │   └── bus-route-bg.png      # Route network background pattern
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navigation with smooth scroll
│   │   ├── Hero.jsx              # Canvas animation + city bus imagery
│   │   ├── About.jsx             # Project overview and objectives
│   │   ├── Problem.jsx           # 5 challenge cards
│   │   ├── Solution.jsx          # 5 numbered solution approaches
│   │   ├── Features.jsx          # 5 key feature cards with SVG icons
│   │   ├── Technology.jsx        # 8 tech stack categories
│   │   ├── Architecture.jsx      # 3-layer system architecture diagram
│   │   ├── HowItWorks.jsx        # 7-step operational timeline
│   │   ├── Implementation.jsx    # 6 development methodology cards
│   │   ├── Results.jsx           # 4 animated stat counters
│   │   ├── FutureScope.jsx       # 5 planned enhancements
│   │   ├── Team.jsx              # Team members + institution info
│   │   └── Footer.jsx            # Brand footer
│   ├── hooks/
│   │   └── useReveal.js          # IntersectionObserver scroll animation
│   ├── App.jsx                   # Root component with scroll tracking
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Complete CSS design system
├── index.html                    # Vite HTML entry with Google Fonts
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
└── README.md                     # This file
```

---

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- [Git](https://git-scm.com/)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/kundansury/OBUS.git

# Navigate to the project directory
cd OBUS

# Install dependencies
npm install

# Start the development server
npm run dev
```

The website will be available at `http://localhost:5173/`

### Production Build

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The production build outputs to the `dist/` directory and can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, AWS S3, etc.).

---

## How The System Works

The OBUS system operates through a 7-step real-time pipeline:

| Step | Process | Description |
|---|---|---|
| **01** | Passenger Boards Bus | Passengers enter through designated entry points equipped with sensors. |
| **02** | RFID System Logs Entry | RFID reader automatically detects the passenger's transit card and logs the boarding event with timestamp and stop information. |
| **03** | Camera Counts Passengers | YOLO-based computer vision counts passengers entering and exiting in real time, providing independent verification. |
| **04** | Data Transmitted to Server | Passenger flow data (RFID logs + camera counts) is securely transmitted to the Django backend server via REST APIs. |
| **05** | ML Model Analyzes Patterns | Machine learning algorithms process the incoming data stream, correlate it with historical patterns, and identify demand trends. |
| **06** | System Adjusts Routes | Based on predictions and real-time occupancy, the optimization engine recommends route and schedule adjustments. |
| **07** | Dashboard Displays Insights | Transit authorities receive real-time analytics, alerts, and actionable recommendations on the React dashboard. |

---

## Implementation Details

### Frontend (React.js)
- Built with React 19 and Vite 7 for fast hot-module replacement
- Component-based architecture with 14 modular components
- Custom `useReveal` hook using IntersectionObserver for scroll animations
- Canvas API for animated hero section with moving bus route visualization
- Responsive design supporting desktop, tablet, and mobile breakpoints
- CSS custom properties (design tokens) for consistent theming

### Backend (Django + Python)
- RESTful API architecture built with Django REST Framework
- Real-time WebSocket connections for live data streaming
- JWT-based authentication for secure API access
- Modular service architecture separating data ingestion, processing, and analytics

### Machine Learning Pipeline
- **Data Preprocessing**: Cleaning and feature engineering on raw sensor data
- **Model Training**: Scikit-Learn for demand prediction models, TensorFlow for deep learning experiments
- **Inference**: Real-time prediction serving via Django API endpoints
- **Retraining**: Scheduled model retraining with new data to maintain accuracy

### Computer Vision Module
- **YOLO v8**: Object detection model fine-tuned for passenger counting
- **OpenCV**: Video stream processing and frame extraction
- **Bidirectional Counting**: Separate entry/exit tracking using directional movement analysis
- **Edge Processing**: Optional on-device inference for reduced latency

### Hardware Integration
- **RFID Reader**: Long-range UHF RFID readers mounted at bus entry/exit
- **RFID Cards**: Passive UHF RFID cards issued to passengers
- **Camera Module**: USB camera with wide-angle lens at bus entrance
- **Communication**: 4G/LTE module for real-time data transmission

---

## Results and Performance

| Metric | Value | Description |
|---|---|---|
| **Overcrowding Reduction** | 20% | Measured reduction in peak-hour overcrowding incidents through dynamic scheduling |
| **Passenger Satisfaction** | 90% | Survey-based satisfaction score from pilot test participants |
| **Operational Cost Reduction** | 15% | Savings from optimized route consolidation and fuel efficiency |
| **Monitoring Accuracy** | 98% | Combined RFID + camera passenger count accuracy |

---

## Future Scope

| Enhancement | Description |
|---|---|
| **Real-Time GPS Tracking** | Live bus location tracking with predictive arrival time estimation for passengers at bus stops |
| **Passenger Mobile App** | Android/iOS application providing live bus tracking, digital ticketing, route planning, and push notifications |
| **AI Demand Prediction** | Advanced deep learning models (LSTM, Transformer) for multi-day demand forecasting with weather and event correlation |
| **Multi-Modal Integration** | Unified ticketing across bus, metro, train, and ride-sharing services with seamless transfers |
| **City-Wide Smart Mobility** | Expansion from single-route pilot to a complete city-wide intelligent transportation network with central command |

---

## Team

| Member | Role | Contribution |
|---|---|---|
| **Uday Shah** | Team Leader | Machine Learning and Data Analysis - Led the ML pipeline development, demand prediction models, and data analytics infrastructure |
| **Kundan Suryawanshi** | Developer | System Architecture, Backend Development, IoT Integration - Designed the system architecture, built Django backend APIs, and integrated RFID hardware |
| **Anjas Vaidya** | Developer | Data Processing, System Design - Developed data preprocessing pipelines and contributed to overall system design |
| **Sarthak Tisgaonkar** | Developer | Frontend Interface and System Integration - Built the React dashboard UI and integrated frontend with backend APIs |

**Institution**: K. K. Wagh Institute of Engineering Education and Research, Nashik  
**Department**: Artificial Intelligence and Data Science  
**Project Instructor**: Prof. Pranali K. Shinde

---

## Acknowledgements

We would like to express our gratitude to:

- **Prof. Pranali K. Shinde** for her guidance and mentorship throughout the project
- **K. K. Wagh Institute of Engineering Education and Research** for providing the infrastructure and resources
- **Department of AI and Data Science** for supporting this project as part of the PBL curriculum

---

## License

This project is developed as an academic project at K. K. Wagh Institute of Engineering Education and Research, Nashik. All rights reserved.

---

<p align="center">
  <strong>OBUS</strong> - Optimized Bus Utilization System<br>
  Built with React + Vite | K. K. Wagh Institute | 2024-2025
</p>
