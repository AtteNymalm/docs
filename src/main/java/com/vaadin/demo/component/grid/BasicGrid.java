package com.vaadin.demo.component.grid;

import java.util.List;

import com.vaadin.demo.domain.Person;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.demo.DemoExporter;
import com.vaadin.demo.domain.DataService;

public class BasicGrid extends Div {

  public BasicGrid() {
    // tag::snippet[]
    Grid<Person> grid = new Grid<>(Person.class);
    List<Person> people = DataService.getPeople();
    grid.setItems(people);
    grid.setColumns("firstName", "lastName", "email");
    add(grid);
    // end::snippet[]
  }

  public static class GridEditorExporter extends DemoExporter<BasicGrid> {
  }
}
