import { IAction } from './core.d';

export interface IDetailData {
    portfolioType: string,
    diplomaName: any,
    groupName: string,
    projectName: string,
    projectManager: any
}

export interface IDefinitionCharts {
    sameDay: number,
    chartHour: string,
    chartName: string
}

export interface IDefinitionData {
    sameDay: number | null,
    day: string,
    hour: string,
    educationMethodLabel: string,
    charts: IDefinitionCharts[],
    isDisabled: boolean
}

export interface ISetPortfolioDetail extends IAction {
    detailData: IDetailData
}

export interface ISetPortfolioDefinition extends IAction {
    definitionData: IDefinitionData[]
}