package com.example.testBoard.domain.controller;

import com.example.testBoard.domain.dto.BoardRequestDto;
import com.example.testBoard.domain.entity.Board;
import com.example.testBoard.domain.service.BoardService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/board")
@CrossOrigin(origins = "http://localhost:3000")
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/save")
    public String savePost(@Valid @RequestBody BoardRequestDto boardRequestDto){
        boardService.savePost(boardRequestDto);
        return "게시글 등록 성공";
    }

    @GetMapping("/list")
    public Page<Board> getList(Pageable pageable){
        return boardService.getList(pageable);
    }


    @PutMapping("/update/{id}")
    public Board updatePost(@PathVariable Long id, @Valid @RequestBody BoardRequestDto boardRequestDto){
        return boardService.updatePost(id,boardRequestDto);
    }

    @DeleteMapping("/{id}")
    public void deleteOnePost(@PathVariable Long id){
        boardService.deleteOnePost(id);
    }

    @DeleteMapping("/delete-select")
    public void deletePost(@RequestBody Map<String, List<Long>> request){
        List<Long> ids = request.get("ids");

        System.out.println("ids값들:"+ids);
        boardService.deletePost(ids);
    }

    @GetMapping("/{id}")
    public Board getOneDetail(@PathVariable Long id){
        return boardService.getBoardVisit(id);
    }

//    @GetMapping("/search-title")
//    public List<Board> getSearchList(@RequestParam("") String searchTitle){
//        return boardService.getSearchList(searchTitle);
//    }

}
