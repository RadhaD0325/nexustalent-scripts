export const REJECTED_STATUS = 871850004;
export const SELECTED_STATUS = 871850003;

export function shouldShowRejectionReason(
    status: number | null
): boolean {
    return status === REJECTED_STATUS;
}

export function isSelectedStatus(
    status: number | null
): boolean {
    return status === SELECTED_STATUS;
}