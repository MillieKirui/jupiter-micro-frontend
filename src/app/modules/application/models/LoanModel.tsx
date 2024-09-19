export interface LoanModel {
    id: number;
    uuid: string;
    applicantId: string;
    loanAmount: string;
    interestAmount: string;
    interestRate: string;
    dateBorrowed: string;
    firstPaymentDate: string;
    lastPaymentDate: string;
    penaltyAmount: string;
    balanceDue: string;
    paymentFrequency: string;
    collateralType: string;
    collateralValue: string;
    collateralFilePath?: string | null;
    defaultStatus: boolean;
    loanTerm: number;
    payType: string;
    transactionNumber: string;
    dateDisbursed: string;
    approvalStatus: string;
    disbursed: boolean;
    createdAt: string;
    updatedAt: string;
}