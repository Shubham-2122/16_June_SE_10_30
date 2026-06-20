/*
	
	++
	--
	
	pre inc = ++value
	post inc= value++

*/

#include<stdio.h>
#include<conio.h>

void main()
{
	int a = 10;
	
	printf("A : %d",a);
	++a; // pre inc + 1
	printf("\nA : %d",a); //11
	a++; // post inc +1
	printf("\nA : %d",a); // 12
		
	printf("\nA : %d",++a); // 13
	printf("\nA : %d",a++); //13 
	
	printf("\nA : %d",++a); //15
	printf("\nA : %d",a++); //15 //16
	printf("\nA : %d",a++); //16 // 17
	printf("\nA : %d",++a); //18
	printf("\nA : %d",a++); //18 
	printf("\nA : %d",++a); //20
	printf("\nA : %d",a++); //20 //21
	printf("\nA : %d",++a); //22
	
	
	printf("\nA : %d",--a);
	printf("\nA : %d",a--);
	printf("\nA : %d",a);
	
	
	
	getch();
}
