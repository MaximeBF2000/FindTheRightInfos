import React from "react"
import { useToggle, useError } from "../../utils/hooks"
import { render, cleanup } from "@testing-library/react"
import { act, renderHook } from "@testing-library/react-hooks"

afterEach(() => { cleanup() })
jest.useFakeTimers()


describe("useToggle", () => {
	test("should return false when not given parameter then true after toggled", () => {
    const { result } = renderHook(() => useToggle())
    expect(result.current[0]).toBeFalsy()
    act(() => {
      result.current[1]()
    })
    expect(result.current[0]).toBeTruthy()
	})
})


describe("useError", () => {
  test("should return a value at first then null after 3sec", () => {
    const { result } = renderHook(() => useError())
    expect(result.current[0]).toBeNull()
    act(() => {
      result.current[1]("error")
    })
    expect(result.current[0]).toBe("error")
  })
})
