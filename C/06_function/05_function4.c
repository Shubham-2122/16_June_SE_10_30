/*
		4) without parameter and with return
		
*/
#include<stdio.h>
#include<conio.h>

int demo(){
	return 42;
}

void main()
{
	printf("Num : %d",demo());
	getch();
}
