package com.cos.book.wdb;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

// 단위 테스트 (Controller 관련 로긱만 띄우기) Filter, ControllerAdvice 등이 메모리에 같이 띄워진다.
// 참조 url : https://howtodoinjava.com/spring-boot2/testing/testing-support/
// 현재 JUnit 5 사용 하고 있음. @RunWith(SpringRunner.class) 이것은 Junit 4에서 는 적어 Spring 으로 확정했다. JUnit 5 에서는 필요없다.
// @WebMvcTest 에 ExtendWith(SpringExtension.class) 가 들어가 있다. JUnit 테스트 할때 테스트 파일이 Spring 환경에서 테스트 하고 싶을때 이 어노테이션을 무조건 붙여야 한다.
@WebMvcTest // 메모리에 Controller, Filter, ControllerADvice 가 메모리에 띈다.
public class BookControllerUnitTest {
}
