import './config';
import React, { useContext } from 'react';
import RootStore from './RootStore';

const StoreContext = React.createContext<RootStore>(new RootStore());
const useStore = () => useContext(StoreContext);
export { RootStore, StoreContext, useStore };
