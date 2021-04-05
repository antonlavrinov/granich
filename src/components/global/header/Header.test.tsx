import React from "react"
// import renderer from "react-test-renderer"
import { shallow } from "enzyme"
import Header from "."
import { NavLinkExternal } from "./Header"

//Если у нас внутри компонента Header есть еще другие компоненты,
//то shallow их проигнорирует
//shallow полезен тогда, когда нужно протестироват один компонент

//mount полезен, когда компонент использует браузерное api
//(например querySelector) или у него есть доступ к методам жизненного цикла
//render рендерит статический компонент

//вместо того, чтобы КАЖДЫЙ компонент проверять, имеется ли у него те элементы, мы можем просто
//сделать snapshot
//enzyme сделает снапшот компонента. И если мы что-то изменили в нем, то тест провалится, потому что снапшоты
//не будут совпадать
//когда в консоли отобразится ошибка мы можем нажать w и u, чтобы enzyme сделал еще один снапшот
//в принципе нам больше и не нужно писать никаких тестов, snapshot всё делает за нас

//tests coverage npm test -- --coverage покажет, какие файлы мы не покрыли тестами
// import React from 'react'

describe("<Header> component", () => {
  describe("with Light mode", () => {
    let wrapper
    let mockScrollTo

    beforeEach(() => {
      mockScrollTo = jest.fn()
      wrapper = shallow(<Header type={"light"} scrollTo={mockScrollTo} />)
    })

    it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot()
    })
    it("should call onScroll when we click 'Курсы'", () => {
      wrapper.find(NavLinkExternal).at(0).simulate("click")
      expect(mockScrollTo).toHaveBeenCalled()
    })
    it("should call onScroll when we click 'Контент'", () => {
      wrapper.find(NavLinkExternal).at(1).simulate("click")
      expect(mockScrollTo).toHaveBeenCalled()
    })
  })
  describe("with Dark mode", () => {
    let mockScrollTo = jest.fn()

    it("should render correctly", () => {
      expect(<Header type={"dark"} scrollTo={mockScrollTo} />).toMatchSnapshot()
    })
  })
})
