package com.cos.book.service;

import com.cos.book.domain.Book;
import com.cos.book.domain.BookRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// @Service로 등록하면 기능을 정희할 수 있고, 트랜잭션을 관리 할 수 있음.

@RequiredArgsConstructor // final 이 붙은있는 것을 constructor 을 자동을 만들어 준다. 자동 DI 된다.
@Service
public class BookService {

    private final BookRepository bookRepository;

    @Transactional
    public Book 저장하기(Book book) {
       return  bookRepository.save(book); // save 한 entity 를 그대로 리턴 함.
    }

    @Transactional(readOnly = true) // readonly = true 가 붙으면 jpa 변경감지라는 내부기능 비활성화홤. update시의 정합성을 유지해 줌. insert의 유령데이터현상(팬텀현상) 못막음.
    public Book 한건가져오기(Long id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("id를 확인해 주세요!!"));
    }

    public List<Book> 모두가져오기() {
        return bookRepository.findAll();
    }

    @Transactional
    public Book 수정하기(Long id, Book book) {
        // 더팅체킹 update 하기
        Book bookEntity = bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("id를 확인해 주세요!!")); // 영속화 (book 오브젝트)
        bookEntity.setTitle(book.getTitle());
        bookEntity.setAuthor(book.getAuthor());

        return bookEntity;
    } // 함수 종료 => 트랜젝션종로 => 영속화 되어있는 데이터를 db로 갱신함(flush) => commit 이것을 더티체킹이라고 함.

    public String 삭제하기(Long id) {
        bookRepository.deleteById(id); // 오류가 터지면 exception 을 타니까, 신경쓰지 말고 ok 리턴.
        return "ok";
    }
}
