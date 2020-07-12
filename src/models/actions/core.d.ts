import { IDetailData, IDefinitionData } from '../actions/portfolio';
import { SampleValue } from '../sampleValue';

export interface IAction {
    type: string;
}

export interface IAppState {
    portfolio: {
        detailData: IDetailData;
        definitionData: IDefinitionData[];
    };
}

export function GlobalState() {
    return {
        portfolio: {
            detailData: {
                portfolioType: "0",
                diplomaName: undefined,
                groupName: "",
                projectName: "",
                projectManager: undefined
            },
            definitionData: SampleValue as IDefinitionData[]
        }
    };
}