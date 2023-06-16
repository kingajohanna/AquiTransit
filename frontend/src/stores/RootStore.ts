import FavoriteStore from "./FavoriteStore";

export default class RootStore {
  favoriteStore: FavoriteStore;

  constructor() {
    this.favoriteStore = new FavoriteStore();
  }
}
