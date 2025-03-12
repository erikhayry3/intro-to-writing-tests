function checkValue(value?: "option1" | "option2" | "option3"): boolean {
  if (value === "option1") {
    return true;
  }

  return false;
}

export default checkValue;
