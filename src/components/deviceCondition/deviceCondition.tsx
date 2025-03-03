import { SelectingCondition } from "../SelectingCondition/SelectingCondition";
import { SelectingConditionSmartwatch } from "@/components/selectingConditionSmartwatch/selectingConditionSmartwatch";

interface DeviceConditionProps {
    deviceType: string;
}

export function DeviceCondition({ deviceType }: DeviceConditionProps) {
    return(
        <div className="container mx-auto px-4">
      {deviceType === 'smartwatch' ? (
        <div>
          <SelectingConditionSmartwatch />
          
        </div>
      ) : (
        <div>
          <SelectingCondition />
          
        </div>
      )}
    </div>
    )
}