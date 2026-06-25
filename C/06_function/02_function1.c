/*
	1) without parameter and without return
	
	void fun-name(){
		..code;
	}
	
	fun-name();
	fun-name();
*/

#include<stdio.h>
#include<conio.h>

void demo(){
	printf("\nhello demo function\n");
}

void display(){
	int i;
	for(i=1;i<=30;i++){
		printf("*");
	}
}

void main()
{
	display();
	demo();
	display();
	demo();
	display();
	printf("\nShubham jadav\n");
	display();
	
	getch();
}





