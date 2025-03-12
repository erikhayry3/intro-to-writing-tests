import { render } from "@testing-library/react";
import Basket from "./Basket";
import * as fetchBasket from "./fetchBasket";

describe("Basket", () => {
  describe("mock fetch", () => {
    it("should fetch items - re assign global fetch", async () => {
      global.fetch = jest.fn(() => {
        return Promise.resolve({
          ...jest.requireActual("node-fetch"),
          json: () => Promise.resolve(["item1", "item2"]),
        });
      });

      const { findByRole, getAllByRole } = render(<Basket />);

      expect(
        (await findByRole("list", { name: "Items" })).children,
      ).toHaveLength(2);
      expect(getAllByRole("listitem").at(0)).toHaveTextContent("item1");
      expect(getAllByRole("listitem").at(1)).toHaveTextContent("item2");
    });

    it("should fetch items - re assign global fetch - error", async () => {
      global.fetch = jest.fn(() => {
        return Promise.resolve({
          ...jest.requireActual("node-fetch"),
          json: () => Promise.reject(new Error("error")),
        });
      });

      const { findByText } = render(<Basket />);

      expect(await findByText("Error fetching basket")).toBeInTheDocument();
    });

    it("should fetch items - spyOn wrapper", async () => {
      const fetchSpy = jest
        .spyOn(fetchBasket, "default")
        .mockResolvedValue(["item1", "item2"]);

      const { getByRole, findByRole, getAllByRole } = render(<Basket />);

      expect(fetchSpy).toHaveBeenCalled();
      expect(
        (await findByRole("list", { name: "Items" })).children,
      ).toHaveLength(2);
      expect(getByRole("list", { name: "Items" }).children).toHaveLength(2);
      expect(getAllByRole("listitem").at(0)).toHaveTextContent("item1");
      expect(getAllByRole("listitem").at(1)).toHaveTextContent("item2");
    });

    it("should fetch items - spyOn wrapper - error", async () => {
      jest.spyOn(fetchBasket, "default").mockRejectedValue("error");

      const { findByText } = render(<Basket />);

      expect(await findByText("Error fetching basket")).toBeInTheDocument();
    });

    // Requirements change: make three calls to fetchBasket

    afterEach(() => {
      jest.clearAllMocks();
      global.fetch = jest.requireActual("node-fetch");
    });
  });
});
