import { IDefinitionData } from '../actions/portfolio';
import { IPagesProps } from './pages';

export interface IPortfolioDefinitionProps extends IPagesProps {
    data: IDefinitionData[];
}