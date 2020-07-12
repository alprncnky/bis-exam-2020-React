import Types, { GlobalState } from '../../models/actions/core.d';
import { ISetPortfolioDetail, ISetPortfolioDefinition } from '../../models/actions/portfolio';
import * as Actions from '../constants/portfolio';


const portfolioReducer = (state = GlobalState().portfolio, action: Types.IAction) => {
    const newState: any = { ...state };
    if (action.type === Actions.actions.SET_PORTFOLIO_DETAIL_DATA) {
        const portfolioAction = (action as ISetPortfolioDetail);
        newState.detailData = portfolioAction.detailData;
    } else if (action.type === Actions.actions.SET_PORTFOLIO_DEFINITION_DATA) {
        const portfolioAction = (action as ISetPortfolioDefinition);
        newState.definitionData = portfolioAction.definitionData;
    } else {
        return state;
    }
    return Object.assign({}, state, newState);
}

export default portfolioReducer;