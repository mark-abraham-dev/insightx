# InsightX

InsightX is a web application for data analytics, allowing users to upload CSV files or start with a randomly generated table for analysis. The application offers various charts and tables to visualize the data distributions.

## Tech Stack

- **Frontend**: React, TypeScript, Redux
- **Data Visualization**: D3.js, Chart.js
- **Routing**: react-router-dom
- **Random Data Generation**: faker-js

## Features

- **CSV File Upload**: Users can upload CSV files to start the analysis.
- **Random Data Generation**: Users can start with a randomly generated table with five columns: First Name, Last Name, Age, Height, and Weight.
- **Data Visualization**:
  - **Age Distribution**: Displayed using a bar chart.
  - **Height Distribution**: Displayed using a line chart.
  - **Weight Distribution**: Displayed using a pie chart.
- **Table Pagination**: Users can navigate through the table content using pagination.

## Installation

To get started with InsightX, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/mark-abraham-dev/insightx.git
   cd insightx
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

The application will be running at `http://localhost:3000`.

## Usage

### Setting Page

- **Upload CSV**: Users can upload a CSV file to begin their analysis.
- **Random Table**: Users can generate a random table with columns: First Name, Last Name, Age, Height, and Weight.

### Analysis Page

- **Table Content**: View the data in a paginated table format.
- **Visualizations**:
  - **Age**: Visualized with a bar chart.
  - **Height**: Visualized with a line chart.
  - **Weight**: Visualized with a pie chart.

## Dependencies

- **React**: ^18.2.0
- **TypeScript**: ^7.2.0
- **Redux**: ^5.0.1
- **react-redux**: ^9.1.2
- **react-router-dom**: ^6.23.1
- **D3.js**: ^7.2.0
- **Chart.js**: ^3.5.1
- **faker-js**: ^8.4.1

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact me at [mark.a.veron.1989@gmail.com](mailto:mark.a.veron.1989@gmail.com).

---

Thank you for using InsightX! We hope it helps you with your data analysis needs.
