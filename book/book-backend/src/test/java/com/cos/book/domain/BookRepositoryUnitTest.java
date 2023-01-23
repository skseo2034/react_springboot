package com.cos.book.domain;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;

// 단위 테스트, DB 관련됨 Bean이 IoC에 등록되면 됨
@Transactional
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY) // 가짜 디비로 테스트, Replace.NONE 실제 db로 테스트 단위 테스트에서는 실제 db 연동 필요없음.
@DataJpaTest // Repository 들을 다 IoC에 등록해 줌 그래서 @Mock 를 사용할 필요 없음. 그래서 @Autowired 를 사용할 수 있다.
public class BookRepositoryUnitTest {

    @Autowired
    private BookRepository bookRepository;

    @Test
    public void save_테스트() {
        // given (테스트 하기 위한 준비)
        Book book = new Book();
        book.setTitle("책제목");
        book.setAuthor("책저자");

        // when
        Book bookEntity = bookRepository.save(book);

        // then
        assertEquals("책제목", bookEntity.getTitle());
    }
}
