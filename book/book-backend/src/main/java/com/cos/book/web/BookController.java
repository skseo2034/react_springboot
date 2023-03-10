package com.cos.book.web;

import com.cos.book.domain.Book;
import com.cos.book.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class BookController {

    private final BookService bookService;

    @GetMapping("/")
    public ResponseEntity<?> findAll1() {
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }

    // security (라이브러리 적용) - CORS 정책을 가지고 있음.
    // @CrossOrigin 은 의미가 없음. 나중에 security 에서  cors 해제 처리를 해야 함.
    @CrossOrigin
    @PostMapping("/book")
    public ResponseEntity<?> save(@RequestBody Book book) {
        return new ResponseEntity<>(bookService.저장하기(book), HttpStatus.CREATED);
    }
    @CrossOrigin
    @PostMapping("/book/initialData")
    public ResponseEntity<?> saveInitialData() {
        for (int i = 1; i <= 3; i++) {
            Book book = new Book(null, "제목" + i, "ssk");
            bookService.저장하기(book);
        }

        return new ResponseEntity<String>("ok", HttpStatus.CREATED);
    }

    @CrossOrigin
    @GetMapping("/book")
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(bookService.모두가져오기(), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/book/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return new ResponseEntity<>(bookService.한건가져오기(id), HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping("/book/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Book book) {
        return new ResponseEntity<>(bookService.수정하기(id, book), HttpStatus.OK);
    }
    @CrossOrigin
    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        return new ResponseEntity<>(bookService.삭제하기(id), HttpStatus.OK);
    }
}
