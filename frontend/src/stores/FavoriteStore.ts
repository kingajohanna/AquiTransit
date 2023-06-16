import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class FavoriteStore {
  favorites: string[] = [];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "FavoriteStore",
      properties: ["favorites"],
      storage: AsyncStorage,
    });
  }

  addFavStop(stopName: string) {
    let includes = false;
    this.favorites.map((s) => {
      if (s === stopName) includes = true;
    });

    if (!includes) {
      this.favorites.push(stopName);
    }
  }

  removeFavStop(stopName: string) {
    this.favorites = this.favorites.filter((s) => s !== stopName);
  }

  isFav(stopName: string) {
    return this.favorites.includes(stopName);
  }

  clean() {
    this.favorites = [];
  }
}
