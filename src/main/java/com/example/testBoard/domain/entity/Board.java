package com.example.testBoard.domain.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(name = "test_board")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String author;
    private String title;
    private String content;

    @Builder
    public Board(String author,String title,String content){
        this.author = author;
        this.title = title;
        this.content = content;
    }

    //게시글 조회수 증가를 위한 저장공간
    private Long countVisit = 0L;

    public void update(String title, String content){
        this.title = title;
        this.content = content;
    }

}
