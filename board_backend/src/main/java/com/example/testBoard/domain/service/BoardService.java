package com.example.testBoard.domain.service;

import com.example.testBoard.domain.dto.BoardRequestDto;
import com.example.testBoard.domain.entity.Board;
import com.example.testBoard.domain.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    //게시글 저장
    public void savePost(BoardRequestDto boardRequestDto){
        Board board = Board.builder()
                .title(boardRequestDto.getTitle())
                .content(boardRequestDto.getContent())
                .author(boardRequestDto.getAuthor())
                .build();
        boardRepository.save(board);
    }

    public Page<Board> getList(Pageable pageable){
        return boardRepository.findAll(pageable);
    }

    @Transactional
    public Board updatePost (Long id, BoardRequestDto boardRequestDto) {
        Board board = boardRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("게시글이 없습니다"));

        board.update(boardRequestDto.getTitle(), boardRequestDto.getContent());

        return board;
    }

    @Transactional
    public void deleteOnePost(Long id){
        boardRepository.deleteById(id);
    }

    @Transactional
    public void deletePost(List<Long> ids){
        if(ids==null || ids.isEmpty()){
            return;
        }
        boardRepository.deleteAllByIdInBatch(ids);
    }

    //게시글 조회수 증가 메서드
    @Transactional
   public Board getBoardVisit(Long id){
        Board board = boardRepository.findById(id)
                .orElseThrow(()->new RuntimeException("게시글이 없습니다"));

        board.updateVisit(board.getCountVisit());
        return board;
    }

    // title 검색 기능 메서드
    public List<Board> getSearchList (String searchtitle) {
        return boardRepository.findByTitleContaining(searchtitle);

    }

}
