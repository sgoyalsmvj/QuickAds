# QuickAds

This project is a Next.js with pages router application designed to display company performance metrics, ad spend, and testing volume using responsive (for tablets and mobile devices) charts and tables. The application is built with React, Tailwind CSS, and Chart.js.

## Usage

This application displays company details, performance charts, and a videos table. The data for these components is sourced from JSON files located in the `datafiles` directory.


### CompanyDetails Component

Displays detailed information about a company, including:
- Legal name
- Year founded
- Number of employees
- Headquarters
- Category
- Ad spend and ranks

### VideosTable Component

A table listing video details with the following columns:
- Thumbnail
- Title
- Brand
- Total Ad Spend
- Ad Spend in Last 30 Days
- Publish Date
- Duration

Pagination buttons allow navigation through video pages.

### LineChart Component

Displays a line chart visualizing performance metrics over time.

### BarChart Component

Displays a bar chart showing comparative data.

## Data Files

- **data1.json**: Contains company-specific data.
- **data2.json**: Provides video data for the dashboard.
- **graphsData.js**: Contains mock data for line and bar charts.

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/sgoyalsmvj/QuickAds.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## Technologies Used

- Tailwind CSS
- React Icons
- Chart.js
- Next.js with Pages router

---