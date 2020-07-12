import {IDetailData} from '../actions/portfolio';
import {IPagesProps} from './pages';

export interface IPortfolioDetailProps extends IPagesProps {
    data: IDetailData;
}