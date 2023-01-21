package com.cos.book.service;

import com.cos.book.domain.BookRepository;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

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
}
