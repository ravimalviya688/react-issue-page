import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import ReactTooltip from "react-tooltip";

import "./App.css";
import Header from "./components/Header";
import IssuesList from "./components/IssueList";

function App() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);
  const [loading, setLoading] = useState(false);
  function fetchIssues({ page = 1 }) {
    setLoading(true);
    fetch(
      `https://api.github.com/repos/facebook/react/issues?page=${page}&per_page=15`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setList([...list, ...res]);
        if (res?.length < 15) {
          setHasmore(false);
        }
      });
  }
  useEffect(() => {
    fetchIssues({ page });
  }, [page]);
  const loadFunc = useCallback(() => {
    if (loading) {
      return false;
    }
    setTimeout(() => {
      setPage(page + 1);
    }, 400);
  }, [page, loading]);
  console.log("hasmore", hasMore);
  console.log("page", page);
  return (
    <div className="issue-wrapper">
      <Header />
      <div className="list-wrapper">
        <ReactTooltip />
        <InfiniteScroll
          loadMore={loadFunc}
          hasMore={hasMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          {list &&
            list.map((issue, ind) => {
              return <IssuesList issue={issue} />;
            })}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
