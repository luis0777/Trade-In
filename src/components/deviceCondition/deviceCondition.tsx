import { SelectingCondition } from "../SelectingCondition/SelectingCondition";

interface DeviceConditionProps {
    deviceType: string;
}

export function DeviceCondition({ deviceType }: DeviceConditionProps) {
    return(
        <div className="container mx-auto px-4">
      {deviceType === 'smartwatch' ? (
        <div>
          <h2>Condições para Smartwatch</h2>
          
        </div>
      ) : (
        <div>
          <SelectingCondition />
          
        </div>
      )}
    </div>
    )
}