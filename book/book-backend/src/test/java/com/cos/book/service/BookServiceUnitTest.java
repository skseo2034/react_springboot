package com.cos.book.service;

import com.cos.book.domain.Book;
import com.cos.book.domain.BookRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * 단위 테스트, Service 와 관련된 애들만 메모리에 띄우면 됨.)
 * 테스트를 위해 BookRepository을 띄워야 한다. 그러면 통합 테스트가 된다. 그래서 mock로 가짜 객체로 만든다.
 */
@ExtendWith(MockitoExtension.class)
public class BookServiceUnitTest {

    @InjectMocks // BookService 객체가 만들어질때 BookServiceUnitTest 파일에 @Mock로 등록된 모든 애들을 주입 받는다.
    private BookService bookService;

    @Mock
    private BookRepository bookRepository;

    @Test
    public void 저장하기_테스트() throws Exception {
        // given (테스트 하기 위한 준비)
        /*Book book = new Book();
        book.setTitle("책제목");
        book.setAuthor("책저자");
        String content = new ObjectMapper().writeValueAsString(book);

        // stub = 동작지정
        when(bookRepository.save(book)).thenReturn(book);

        // test execute
        Book bookEntity = bookService.저장하기(book);

        // then
        assertEquals(bookEntity, book);*/
    }
}
