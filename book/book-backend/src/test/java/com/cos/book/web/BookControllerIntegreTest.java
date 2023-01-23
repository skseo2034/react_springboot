package com.cos.book.web;

import com.cos.book.domain.Book;
import com.cos.book.domain.BookRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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

    @Autowired
    BookRepository bookRepository;

    @Autowired
    private EntityManager entityManager;

    @BeforeEach
    public void init() {
       /* List<Book> books = new ArrayList<>();
        books.add(new Book(1l, "스프링부트 따라하기", "코스"));
        books.add(new Book(2l, "리액트 따라하기", "코스"));
        bookRepository.saveAll(books);*/

        entityManager.createNativeQuery("ALTER TABLE book ALTER COLUMN id RESTART WITH 1").executeUpdate();
    }

    /*@AfterEach
    public void end() {
        bookRepository.deleteAll();
    }*/
    // BDDMockito 패턴 given, when, then
    @Test
    public void save_테스트() throws Exception {
        // given (테스트 하기 위한 준비)
        Book book = new Book(null, "스프링따라하기", "코스");
        String content = new ObjectMapper().writeValueAsString(book);

        // when (테스트 싷애)
        ResultActions resultAction = mockMvc.perform(post("/book")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content)
                .accept(MediaType.APPLICATION_JSON));

        // then (검증)
        resultAction
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.title").value("스프링따라하기"))
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void findAll_테스트() throws Exception {
        // given
        List<Book> books = new ArrayList<>();
        books.add(new Book(1l, "스프링부트 따라하기", "코스"));
        books.add(new Book(2l, "리액트 따라하기", "코스"));
        bookRepository.saveAll(books);

        // when
        ResultActions resultAction = mockMvc.perform(get("/book")
                .accept(MediaType.APPLICATION_JSON));

        // then
        resultAction
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(2)))
                .andExpect(jsonPath("$.[0].title").value("스프링부트 따라하기"))
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void findById_테스트() throws Exception {
        // given
        Long id = 2L;

        List<Book> books = new ArrayList<>();
        books.add(new Book(1l, "스프링부트 따라하기", "코스"));
        books.add(new Book(2l, "리액트 따라하기", "코스"));
        bookRepository.saveAll(books);
        // when
        ResultActions resultAction = mockMvc.perform(get("/book/{id}", id)
                .accept(MediaType.APPLICATION_JSON));

        // then
        resultAction
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("리액트 따라하기"))
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void update_테스트() throws Exception {
        // given
        Long id = 1L;

        List<Book> books = new ArrayList<>();
        books.add(new Book(1l, "스프링부트 따라하기", "코스"));
        books.add(new Book(2l, "리액트 따라하기", "코스"));
        bookRepository.saveAll(books);

        Book book = new Book(null, "C++따라하기", "코스");
        String content = new ObjectMapper().writeValueAsString(book);

        // when
        ResultActions resultAction = mockMvc.perform(put("/book/{id}", id)
                .contentType(MediaType.APPLICATION_JSON)
                .content(content)
                .accept(MediaType.APPLICATION_JSON));

        // then
        resultAction
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("C++따라하기"))
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void delete_테스트() throws Exception {
        // given
        Long id = 1L;

        // when
        ResultActions resultAction = mockMvc.perform(delete("/book/{id}", id)
                .accept(MediaType.TEXT_PLAIN));

        // then
        resultAction
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());

        MvcResult requestResult = resultAction.andReturn();
        String result = requestResult.getResponse().getContentAsString();

        assertEquals("ok", result);
    }
}
