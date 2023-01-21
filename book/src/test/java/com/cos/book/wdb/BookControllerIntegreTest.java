package com.cos.book.wdb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * 통합 테스트 (모든 Bean들을 똑같이 IoC에 올리고 테스트)
 * @SpringBootTest 모든 애들이 메모리에 다 띈다.
 * webEnvironment = SpringBootTest.WebEnvironment.MOCK 실제 톰캣을 올리는 것이 아니라, 다른 톰갯으로 테스트
 * webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT 실제 콤캣으로 테스트
 * @AutoConfigureMockMvc MockMvc 를 IoC에 등록해 줌
 * @Transactional 모든 각각의 테스트 함수가 종료 될때 마다 트랜잭션을 롤백 해 준다. 없으면 모든 테스트가 종료되면 자동 롤백 되나, 메소드별로 각각 독립적으로 테스트를 해 볼수 없다. 그래서 어노테이션을 붙여서 메소드실행 ->롤백을 해 준다.
 */
@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK) // 모든 애들이 메모리에 다 띈다.
public class BookControllerIntegreTest {

    @Autowired
    private MockMvc mockMvc;
}
