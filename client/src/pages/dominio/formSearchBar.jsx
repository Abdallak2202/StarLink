import DataSearchBar from "helpers/dataSearchBar";

const ResultsPage = ({ query }) => (
  <div>
    <h1>Results for "{query}"</h1>
    <DataSearchBar />
  </div>
);

ResultsPage.getInitialProps = ({ query }) => {
  return { query: query.query };
};

export default ResultsPage;
