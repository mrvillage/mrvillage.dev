import { UseFormReturnType } from "@mantine/form";
import { useEffect, useRef } from "react";

export function useFormValidation(form: UseFormReturnType<any>) {
  const firstValidation = useRef(true);
  useEffect(() => {
    if (!firstValidation.current) {
      form.validate();
    } else {
      firstValidation.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.values]);
}
