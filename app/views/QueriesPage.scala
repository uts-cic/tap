/*
 * Copyright (c) 2016-2018 original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 */

package views


import controllers.routes
import models.graphql.FieldDocs
import scalatags.Text.all.{name, _}
import scalatags.Text.{TypedTag, tags, tags2}

/**
  * Created by andrew@andrewresearch.net on 20/11/17.
  */
object QueriesPage extends GenericPage {

  override def page(titleStr:String):TypedTag[String] = tags.html(
    head(
      tags2.title(titleStr),
      link(rel:="stylesheet",href:=routes.Assets.versioned("stylesheets/bootstrap.min.css").url)
    ),
    body(
      div(`class`:="container-fluid",
        div(`class`:="row",
          div(`class`:="col",
            h3("TAP Example Queries")
          )
        ),
        div(`class`:="row",
          div(`class`:="col-1"),
          div(`class`:="col-10",
            for((name,doc) <- FieldDocs.fields.toList) yield queryCard(name,doc.description,doc.parameters,doc.exampleQuery)
          )
        )
      ),
      script(src:=bundleUrl)
    )
  )

  def queryCard(title:String,description:String,parameters:Map[String,String],query:String): TypedTag[String] = div(`class`:="card card-light",
    div(`class`:="card-header", h4(title)),
    div(`class`:="card-body",
      table(tr(
        td(width:="50%",
          h5("Description"),
          p(description),
          h5("Parameters"),
          for((parameter,paramDescription) <- parameters.toList) yield div(s"$parameter: $paramDescription")),
        td(width:="5%"),
        td(width:="45%",
          h5("Example query"),
          pre(code(query))
        )
      ))
    )
  )


}