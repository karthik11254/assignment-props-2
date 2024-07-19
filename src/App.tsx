import './components/List.module.scss'
import List from './components/List'
import { ListDetails } from './components/List.type'

function App() {
  const itemList: ListDetails[] = [{
    name: "a",
    color: "a1",
    price: 1,
    isFavorite: false
  }, {
    name: "b",
    color: "b1",
    price: 1,
    isFavorite: true
  }, {
    name: "c",
    color: "c1",
    price: 1,
    isFavorite: false
  }, {
    name: "d",
    color: "d1",
    price: 1,
    isFavorite: false
  }, {
    name: "e",
    color: "e1",
    price: 1,
    isFavorite: true
  }, {
    name: "f",
    color: "f1",
    price: 1,
    isFavorite: true
  }, {
    name: "g",
    color: "g1",
    price: 1,
    isFavorite: true
  }, {
    name: "h",
    color: "h1",
    price: 1,
    isFavorite: false
  }, {
    name: "i",
    color: "i1",
    price: 1,
    isFavorite: false
  }]

  const favoriteItems = itemList.filter(item => item.isFavorite);
  const nonFavoriteItems = itemList.filter(item => !item.isFavorite);
  return (
    <div className="main">
      <h1>Title</h1>
      <div className="lists">
        <div className="list">
          <h2>Favorites</h2>
          {favoriteItems.map((item) => (
            <List {...item} />
          ))}
        </div>
        <div className="list">
          <h2>Not Favorites</h2>
          {nonFavoriteItems.map((item) => (
            <List {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
