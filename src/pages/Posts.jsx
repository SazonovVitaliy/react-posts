import React, { useEffect, useRef, useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import { PostsService } from "../API/PostsService";
import MyLoader from "../components/UI/loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { getTotalPages } from "../utils/getTotalPages";
import { usePagination } from "../hooks/usePagination";
import MyPagination from "../components/UI/pagination/MyPagination";
//import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [fetchPosts, isPostsLoading, errorPosts] = useFetching(async () => {
    const response = await PostsService.getAll(limit, page);
    setPosts([...response.data]);
    const totalPosts = response.headers["x-total-count"];
    setTotalPages(getTotalPages(totalPosts, limit));
  }, []);
  const pages = usePagination(totalPages);
  console.log(pages);
  //const lastElem = useRef();

  //useObserver(lastElem, page < totalPages, isPostsLoading, () => {
  //  setPage(page + 1);
  //});
  const sortedAndSearcedPosts = usePosts(posts, filter.sort, filter.query);
  const changePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  return (
    <div className="app">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm addPost={addPost} />
      </MyModal>
      <hr style={{ margin: "15px 0px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Количество эл-ов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все" },
        ]}
      />
      {errorPosts && <h1>Произошла ошибка {errorPosts}</h1>}
      {isPostsLoading && <MyLoader />}

      <PostList
        remove={deletePost}
        title="Посты про JS"
        posts={sortedAndSearcedPosts}
      />
      {/*<div ref={lastElem} style={{ backgroundColor: "teal", height: "1px" }} />*/}
      <MyPagination
        changePage={changePage}
        totalPages={totalPages}
        page={page}
      />
    </div>
  );
};

export default Posts;
