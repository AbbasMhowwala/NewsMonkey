import NewsContext from "./newsContext";
import { useState } from "react";

const NewsState = (props) => {
  const host = "https://newsapi.org/"
  const notesInitial = []
  const [setNews] = useState(notesInitial)

  // Get all News
  const getNews = async () => {
    // API Call 
    const response = await fetch(`${host}/v2/top-headlines`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json() 
    setNews(json)
  }
  return (
    <NewsContext.Provider value={{ getNews }}>
      {props.children}
    </NewsContext.Provider>
  )

}
export default NewsState;