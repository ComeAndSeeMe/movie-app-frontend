import React, { useState } from "react";
import "../SearchBar/Search.styles";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Content, Wrapper } from "../SearchBar/Search.styles";
import MovieItem from "../MovieItem";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <Wrapper>
      <Content>
        <div className="search">
          <div className="searchInputs">
            <input
              type="text"
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>
          {filteredData.length != 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  // <div><MovieItem/></div>//搜索返回结果直接是以MovieItem 的形式返回
                  <a className="dataItem" href={value.posterurl} target="_blank"> {/*获取每一步电影的连接从而实现显示操作；*/}
                     <Link to ='/movieItem/id'><p>{value.title}</p></Link>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </Content>
    </Wrapper>
  );
}

export default SearchBar;
