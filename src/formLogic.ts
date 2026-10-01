import {
    shouldShowRejectionReason
} from "./candidateUtils";

export function setDynamicVisibility(
    executionContext: Xrm.Events.EventContext
): void {

    const formContext =
        executionContext.getFormContext();

    const statusAttribute =
        formContext.getAttribute("nex_candidatestatus");

    const rejectionControl =
        formContext.getControl<Xrm.Controls.StandardControl>(
            "nex_rejectionreason"
        );

    if (!statusAttribute || !rejectionControl) {
        return;
    }

    const status =
        statusAttribute.getValue() as number | null;

    rejectionControl.setVisible(
        shouldShowRejectionReason(status)
    );
}