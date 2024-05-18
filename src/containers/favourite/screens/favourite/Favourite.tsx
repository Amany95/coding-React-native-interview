import React, {useState} from 'react';
import {GridList} from '../../components/gridList/GridList';
import {useGetFavouriteMoviesQuery} from '../../../../services/apis/MoviesApi';
import {pageNumber} from '../../../../constants/RequestParams';

function Favourite(): JSX.Element {

  return <GridList  />;
}

export {Favourite};
