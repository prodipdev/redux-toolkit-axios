import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./redux/features/postSlice";

function App() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const postError = useSelector((state) => state.global.post?.error);
  console.log("appError", postError);

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery !== "") {
      dispatch(fetchPost(searchQuery));
    }
  }, [dispatch, searchQuery]);

  return (
    <div>
      <h2>Redux-Toolkit with Axios Hook</h2>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      {postError && <div>Error: {postError}</div>}
      <div>{JSON.stringify(post)}</div>
    </div>
  );
}

export default App;
