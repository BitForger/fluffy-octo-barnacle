locals {

}

resource "aws_ecs_service" "main" {
  name = "gkovacsrealty"
  task_definition = ""
}

resource "aws_ecs_task_definition" "main" {
  container_definitions = ""
  family = ""
}
